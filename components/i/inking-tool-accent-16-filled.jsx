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
		"content": `<style>.wxqs_e-zq {
  fill: currentColor;
  d: path("M14.5 2v2a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V2zm-4 2.5l.52.476l-2.398 4.75a.5.5 0 1 1-.893-.451l2.17-4.3zM9 13c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5");
}
</style><path class="wxqs_e-zq"/>`,
		"fallback": "fluent:inking-tool-accent-16-filled",
	});
}

export default Component;
