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
		"content": `<style>.q60tm6bgs {
  fill: currentColor;
  d: path("M13 21v-2h4v2q0 .425-.288.713T16 22h-2q-.425 0-.712-.288T13 21m-6 0v-3H1.825q-.6 0-.875-.525T1 16.45L3.85 12q-.575 0-.862-.512t.062-1.013l5.125-7.3q.15-.2.375-.312T9 2.75t.45.113t.375.312l5.125 7.3q.35.5.063 1.013T14.15 12l2.875 4.45q.325.5.05 1.025T16.2 18H11v3q0 .425-.288.713T10 22H8q-.425 0-.712-.288T7 21m12.25-3L16 13q.6 0 .888-.537t-.063-1.038l-4.2-6l1.55-2.25q.15-.2.375-.312T15 2.75t.45.113t.375.312l5.125 7.3q.35.5.063 1.013T20.15 12L23 16.45q.325.5.05 1.025t-.875.525z");
}
</style><path class="q60tm6bgs"/>`,
		"fallback": "material-symbols:forest-rounded",
	});
}

export default Component;
