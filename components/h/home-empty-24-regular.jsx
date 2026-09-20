import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oq6e73bjq {
  fill: currentColor;
  d: path("M10.55 2.533a2.25 2.25 0 0 1 2.9 0l6.75 5.694c.508.428.8 1.057.8 1.72v8.803A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V9.947c0-.663.292-1.292.8-1.72zm1.934 1.146a.75.75 0 0 0-.968 0l-6.75 5.695a.75.75 0 0 0-.266.573v8.803c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75V9.947a.75.75 0 0 0-.266-.573z");
}
</style><path class="oq6e73bjq"/>`,
		"fallback": "fluent:home-empty-24-regular",
	});
}

export default Component;
