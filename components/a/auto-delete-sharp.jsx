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
		"content": `<style>.c7mvs2buc {
  fill: currentColor;
  d: path("M5 21V6H4V4h5V3h6v1h5v2h-1v4.3q-.425-.125-.987-.213T17 10t-1.012.075t-.988.2V8h-2v3.25q-.55.4-1.1.987T11 13.4V8H9v9h1q0 .975.35 2.088t.9 1.912zm12 1q-2.075 0-3.537-1.463T12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22m1.65-2.65l.7-.7l-1.85-1.85V14h-1v3.2z");
}
</style><path class="c7mvs2buc"/>`,
		"fallback": "material-symbols:auto-delete-sharp",
	});
}

export default Component;
