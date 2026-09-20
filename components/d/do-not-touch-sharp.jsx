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
		"content": `<style>.fvzxqyg9s {
  fill: currentColor;
  d: path("m20 17.208l-5.667-5.667h1.013V3.558h1v7.983H19V5h1zM12.673 9.88l-1-1V2.558h1zM9 6.208l-1-1v-.65h1zM9.59 21.5L2.72 11.433l.936-.92L8 13.538V9.42L1.887 3.308l.713-.714l19.339 19.339l-.714.713l-1.146-1.146z");
}
</style><path class="fvzxqyg9s"/>`,
		"fallback": "material-symbols-light:do-not-touch-sharp",
	});
}

export default Component;
