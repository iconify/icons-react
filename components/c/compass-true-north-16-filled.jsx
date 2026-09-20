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
		"content": `<style>.vw31y67lr {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m-.129 1.509a.99.99 0 0 1 1.055.606l.962 2.306l.003.008l.092.222c.36.863.36 1.834 0 2.697l-1.058 2.537c-.342.82-1.504.82-1.846 0L6.02 9.348a3.5 3.5 0 0 1 0-2.697l1.06-2.536a.98.98 0 0 1 .792-.606M6.85 8.695q.038.136.092.268l1.06 2.536L9.06 8.963q.053-.131.091-.267a1.8 1.8 0 0 1-.45.202a2.5 2.5 0 0 1-1.398 0a1.8 1.8 0 0 1-.454-.203");
}
</style><path class="vw31y67lr"/>`,
		"fallback": "fluent:compass-true-north-16-filled",
	});
}

export default Component;
