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
		"content": `<style>.eatttbcht {
  fill: currentColor;
  d: path("M2.5 21.5v-7.27l4-1.774V9.154l5-2.52V4.347h-2v-1h2v-2h1v2h2v1h-2v2.289l5 2.519v3.302l4 1.775V21.5h-7.77v-5.077h-3.46V21.5zm10.293-8.711q.323-.327.323-.793q0-.467-.327-.79q-.327-.321-.793-.321q-.467 0-.79.326q-.321.327-.321.793q0 .467.326.79q.327.322.793.322q.467 0 .79-.327");
}
</style><path class="eatttbcht"/>`,
		"fallback": "material-symbols-light:church-sharp",
	});
}

export default Component;
