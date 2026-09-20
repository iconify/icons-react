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
		"content": `<style>.q85bnubon {
  fill: currentColor;
  d: path("M2 18V8q0-1.65 1.175-2.825T6 4h12q1.65 0 2.825 1.175T22 8v10q0 .825-.587 1.413T20 20H4q-.825 0-1.412-.587T2 18m2 0h16V8q0-.825-.587-1.412T18 6H6q-.825 0-1.412.588T4 8zm0 0h16zm7.95-3.775v-5.05q0-.275-.2-.475t-.475-.2t-.487.2t-.213.475v5.35q0 .425.288.713t.712.287h2.7q.275 0 .463-.187t.187-.463t-.187-.462t-.463-.188z");
}
</style><path class="q85bnubon"/>`,
		"fallback": "material-symbols:game-button-l-outline-rounded",
	});
}

export default Component;
