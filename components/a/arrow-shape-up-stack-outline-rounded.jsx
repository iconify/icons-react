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
		"content": `<style>.kmikq4h8l {
  fill: currentColor;
  d: path("M9 19v-2H5.675q-.5 0-.7-.45t.125-.8l6.15-6.9q.3-.35.75-.35t.75.35l6.15 6.9q.325.35.125.8t-.7.45H15v2q0 .425-.288.713T14 20h-4q-.425 0-.712-.288T9 19m2-1h2v-2q0-.425.288-.712T14 15h1.55L12 11l-3.55 4H10q.425 0 .713.288T11 16zm1-12l-5.025 5.675q-.15.15-.35.238t-.4.087q-.65 0-.912-.575t.162-1.075l5.775-6.5q.3-.35.75-.35t.75.35l5.775 6.5q.425.5.163 1.075t-.913.575q-.2 0-.4-.075t-.35-.25zm0 9");
}
</style><path class="kmikq4h8l"/>`,
		"fallback": "material-symbols:arrow-shape-up-stack-outline-rounded",
	});
}

export default Component;
