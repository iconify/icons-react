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
		"content": `<style>.f12geibvj {
  fill: currentColor;
  d: path("M5 22V8h14v14zm6-3h2v-1h-2zm0-2h2q0-.475.238-.862t.512-.763q.3-.425.525-.913t.225-1.012q0-1.025-.725-1.737T12 11t-1.775.713T9.5 13.45q0 .525.238 1t.512.9q.275.4.513.788T11 17M6 6.5V5h12v1.5zm1-3V2h10v1.5z");
}
</style><path class="f12geibvj"/>`,
		"fallback": "material-symbols:batch-prediction-sharp",
	});
}

export default Component;
