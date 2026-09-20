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
		"content": `<style>.pekqa_buj {
  fill: currentColor;
  d: path("m20 17.246l-1-1V7h-4V3H8v2.112l-1-1V2h8.5L20 6.5zM8 17h7.585L8 9.416zm12.654 5.07L16.584 18H7V8.416l-5.07-5.07l.708-.708l18.723 18.723zM3 22V9h1v12h11v1z");
}
</style><path class="pekqa_buj"/>`,
		"fallback": "material-symbols-light:file-copy-off-outline-sharp",
	});
}

export default Component;
