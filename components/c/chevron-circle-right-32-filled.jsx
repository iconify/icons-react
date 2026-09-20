import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t-hbj0bls {
  fill: currentColor;
  d: path("M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16m12.707-6.707a1 1 0 1 0-1.414 1.414L18.586 16l-5.293 5.293a1 1 0 0 0 1.414 1.414l5.879-5.878l.028-.033q.035-.04.073-.08A1 1 0 0 0 20.98 16c.003-.26-.097-.484-.293-.718a1 1 0 0 0-.1-.11h-.002z");
}
</style><path class="t-hbj0bls"/>`,
		"fallback": "fluent:chevron-circle-right-32-filled",
	});
}

export default Component;
