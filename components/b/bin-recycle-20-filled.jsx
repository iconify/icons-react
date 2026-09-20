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
		"content": `<style>.vjp4sx69o {
  fill: currentColor;
  d: path("M5.5 3h9a1 1 0 0 1 1 1h-11a1 1 0 0 1 1-1m-2 1v.5q0 .033.004.065l1.347 11.664A2 2 0 0 0 6.837 18h6.327a2 2 0 0 0 1.986-1.77l1.346-11.666l.004-.049V4a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2m7.799 3.75l.452.782a.5.5 0 1 1-.867.5l-.451-.782a.5.5 0 0 0-.866 0l-.452.782a.5.5 0 1 1-.866-.5l.452-.782c.577-1 2.02-1 2.598 0m.866 3.5l-.108-.186a.5.5 0 0 1 .867-.5l.107.186A1.5 1.5 0 0 1 11.732 13H11a.5.5 0 0 1 0-1h.732a.5.5 0 0 0 .433-.75M9 12a.5.5 0 0 1 0 1h-.732a1.5 1.5 0 0 1-1.3-2.25l.108-.186a.5.5 0 0 1 .866.5l-.107.186a.5.5 0 0 0 .433.75z");
}
</style><path class="vjp4sx69o"/>`,
		"fallback": "fluent:bin-recycle-20-filled",
	});
}

export default Component;
