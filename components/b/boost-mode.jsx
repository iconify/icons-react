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
		"content": `<style>.dgql-yn4q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.932 4.904q.885-1.026 2.103-.431q1.218.596.95 1.924l-.391 1.956q-.069.348.156.623q.225.274.58.274h1.985q1.427 0 2.036 1.291q.608 1.291-.301 2.392l-4.879 5.906q-.888 1.077-2.152.485q-1.264-.591-1.006-1.962l.417-2.224q.065-.346-.16-.617t-.577-.271H7.777q-1.444-.001-2.045-1.314t.342-2.406z");
}
</style><path class="dgql-yn4q"/>`,
		"fallback": "uix-solid:boost-mode",
	});
}

export default Component;
