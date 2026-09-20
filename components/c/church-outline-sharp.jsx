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
		"content": `<style>.bet61pbjk {
  fill: currentColor;
  d: path("M2.5 21.5v-7.27l4-1.774V9.154l5-2.52V4.347h-2v-1h2v-2h1v2h2v1h-2v2.289l5 2.519v3.302l4 1.775V21.5h-8v-5.077h-3V21.5zm1-1h6v-5.1h5v5.1h6v-5.627l-4-1.793V9.742l-4.5-2.3l-4.5 2.3v3.338l-4 1.793zm9.293-7.711q.323-.327.323-.793q0-.467-.327-.79q-.327-.321-.793-.321q-.467 0-.79.326q-.321.327-.321.793q0 .467.326.79q.327.322.793.322q.467 0 .79-.327M12 13.962");
}
</style><path class="bet61pbjk"/>`,
		"fallback": "material-symbols-light:church-outline-sharp",
	});
}

export default Component;
