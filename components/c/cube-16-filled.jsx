import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hzcc1nb-f {
  fill: currentColor;
  d: path("M6.923 1.378a3 3 0 0 1 2.154 0l4.962 1.908a1.5 1.5 0 0 1 .961 1.4v6.626a1.5 1.5 0 0 1-.961 1.4l-4.962 1.909a3 3 0 0 1-2.154 0l-4.961-1.909a1.5 1.5 0 0 1-.962-1.4V4.686a1.5 1.5 0 0 1 .962-1.4zM4.697 5.04a.5.5 0 0 0-.394.919L7.5 7.329v3.17a.5.5 0 0 0 1 0V7.33l3.197-1.37a.5.5 0 1 0-.394-.92L8 6.456z");
}
</style><path class="hzcc1nb-f"/>`,
		"fallback": "fluent:cube-16-filled",
	});
}

export default Component;
