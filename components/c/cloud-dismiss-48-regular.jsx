import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dqvsc_beb {
  fill: currentColor;
  d: path("M24 8.5a9.5 9.5 0 0 0-9.497 9.721a1.25 1.25 0 0 1-1.25 1.279H11.5a6 6 0 0 0 0 12h9.74c-.157.809-.24 1.645-.24 2.5h-9.5a8.5 8.5 0 0 1 0-17h.541C12.55 10.84 17.71 6 24 6s11.45 4.84 11.959 11h.541a8.5 8.5 0 0 1 8.387 9.892a13 13 0 0 0-2.575-2.888A6 6 0 0 0 36.5 19.5h-1.753a1.25 1.25 0 0 1-1.25-1.279q.003-.11.003-.221A9.5 9.5 0 0 0 24 8.5M45 34c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-5.293-4.293a1 1 0 0 0-1.414-1.414L34 32.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L32.586 34l-4.293 4.293a1 1 0 0 0 1.414 1.414L34 35.414l4.293 4.293a1 1 0 0 0 1.414-1.414L35.414 34z");
}
</style><path class="dqvsc_beb"/>`,
		"fallback": "fluent:cloud-dismiss-48-regular",
	});
}

export default Component;
