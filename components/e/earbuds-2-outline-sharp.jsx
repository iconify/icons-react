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
		"content": `<style>.vogcqhbvm {
  fill: currentColor;
  d: path("M16.327 22v-4.75h-2.116v-1h3.116V21h1.77v-4.75H21v-2.788h-6.788v-1H22v4.788h-1.904V22zm-3.558-3.808q-1.437 0-2.451-.962t-1.014-2.384q0-1.401 1.014-2.373t2.451-.973h1.442v6.692zm.442-.97v-4.745h-.442q-1.017 0-1.744.68t-.727 1.69t.727 1.692t1.744.682zm-9.307-4.683v-4.75H2V3h7.789v1H3v2.789h1.904v4.75h1.769v-4.75h3.116v1H7.673v4.75zM9.789 8.73V2.039h1.442q1.415 0 2.44.974t1.025 2.378q0 1.425-1.025 2.382t-2.44.958zm1-.971h.442q1.01 0 1.737-.683t.728-1.693t-.728-1.689q-.727-.68-1.737-.68h-.442zm7.423 7.086");
}
</style><path class="vogcqhbvm"/>`,
		"fallback": "material-symbols-light:earbuds-2-outline-sharp",
	});
}

export default Component;
