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
		"content": `<style>.eudwbvbal {
  fill: currentColor;
  d: path("m10.35 16.308l4.958-4.958l-.72-.72l-4.244 4.245l-2.138-2.138l-.714.713zM6.5 19q-1.871 0-3.185-1.306Q2 16.39 2 14.517q0-1.719 1.175-3.051t2.921-1.431q.337-2.185 2.01-3.61T12 5q2.502 0 4.251 1.749T18 11v1h.616q1.436.046 2.41 1.055T22 15.5q0 1.471-1.014 2.486Q19.97 19 18.5 19z");
}
</style><path class="eudwbvbal"/>`,
		"fallback": "material-symbols-light:cloud-done",
	});
}

export default Component;
