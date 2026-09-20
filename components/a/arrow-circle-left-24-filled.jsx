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
		"content": `<style>.vo_bpwb2j {
  fill: currentColor;
  d: path("M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m.28 14.53a.75.75 0 0 1-.976.073l-.085-.072l-4-4.001a.75.75 0 0 1-.073-.977l.073-.084l4.001-4a.75.75 0 0 1 1.133.977l-.072.084l-2.722 2.72h6.692a.75.75 0 0 1 .743.649L17 12a.75.75 0 0 1-.648.743l-.102.007H9.56l2.72 2.72a.75.75 0 0 1 .073.977z");
}
</style><path class="vo_bpwb2j"/>`,
		"fallback": "fluent:arrow-circle-left-24-filled",
	});
}

export default Component;
