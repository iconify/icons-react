import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.llg0ntd4q {
  fill: var(--svg-color--fff, #fff);
  d: path("m25.52 5.502l-6.662 20.989h-5.704L6.492 5.502h4.016l5.521 17.293l5.475-17.293z");
}

.zwqyccbxf {
  fill: var(--svg-color--0d9b35, #0d9b35);
  d: path("M2 2h28v28H2Zm1.689.067a1.624 1.624 0 0 0-1.626 1.625v24.622a1.625 1.625 0 0 0 1.626 1.626h24.627a1.625 1.625 0 0 0 1.626-1.626V3.692a1.624 1.624 0 0 0-1.626-1.625Zm-.681 26.012a.91.91 0 0 0 .911.912h24.164a.91.91 0 0 0 .911-.912V3.919a.91.91 0 0 0-.911-.911H3.919a.91.91 0 0 0-.911.911Z");
}
</style><path class="zwqyccbxf"/><path class="llg0ntd4q"/>`,
		"fallback": "vscode-icons:file-type-vhdl",
	});
}

export default Component;
