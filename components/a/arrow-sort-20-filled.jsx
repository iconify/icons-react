import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.am330twtm {
  fill: currentColor;
  d: path("M14.84 16.722a.76.76 0 0 1-.59.278a.73.73 0 0 1-.527-.22l-3.004-3.008a.75.75 0 0 1 0-1.06a.75.75 0 0 1 1.06 0l1.721 1.732V3.75a.75.75 0 0 1 1.5 0v10.684l1.722-1.718a.75.75 0 0 1 1.059 0a.75.75 0 0 1 0 1.06zM6.34 3.278A.76.76 0 0 0 5.75 3a.73.73 0 0 0-.527.22L2.22 6.228a.75.75 0 0 0 0 1.06a.75.75 0 0 0 1.06 0L5 5.557V16.25a.75.75 0 0 0 1.5 0V5.566l1.722 1.718a.75.75 0 0 0 1.059 0a.75.75 0 0 0 0-1.06z");
}
</style><path class="am330twtm"/>`,
		"fallback": "fluent:arrow-sort-20-filled",
	});
}

export default Component;
