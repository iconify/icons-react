import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zaykqtrlm {
  fill: currentColor;
  d: path("M6 6.75A3.25 3.25 0 0 1 9.25 3.5h9.5A3.25 3.25 0 0 1 22 6.75v18a.75.75 0 0 1-1.203.598L14 20.19l-6.797 5.157A.75.75 0 0 1 6 24.75zM9.25 5A1.75 1.75 0 0 0 7.5 6.75v16.49l6.047-4.587a.75.75 0 0 1 .906 0L20.5 23.24V6.75A1.75 1.75 0 0 0 18.75 5z");
}
</style><path class="zaykqtrlm"/>`,
		"fallback": "fluent:bookmark-28-regular",
	});
}

export default Component;
