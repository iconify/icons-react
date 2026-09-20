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
		"content": `<style>.bjc6t0rva {
  fill: currentColor;
  d: path("M16.477 19.22q0-.292.022-.572t.166-.541q.204-.368.532-.621t.56-.59q.064-.084.164-.49q0-.363-.282-.598T17 15.573q-.367 0-.625.237q-.258.236-.383.604l-.927-.398q.21-.637.737-1.019q.525-.381 1.198-.381q.778 0 1.356.506t.578 1.267q0 .217-.055.426q-.056.208-.186.383q-.237.348-.545.603t-.51.622q-.134.237-.134.796zm.017 1.96q-.21-.204-.21-.505q0-.287.21-.492t.504-.204t.503.206t.209.494t-.209.497t-.503.209t-.504-.205M7.884 21V4.48h2.424V3h3.384v1.48h2.424v7.712q-.275.039-.516.088t-.484.128V5.462H8.885V20h2.561q.104.287.228.527t.293.473z");
}
</style><path class="bjc6t0rva"/>`,
		"fallback": "material-symbols-light:battery-unknown-outline-sharp",
	});
}

export default Component;
