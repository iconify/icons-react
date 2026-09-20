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
		"content": `<style>.xrw70qmon {
  fill: currentColor;
  d: path("m17.1 20.75l-14-6.95q-.575-.275-.838-.763T2 12.026T2.263 11t.837-.775l14-7q.5-.25 1.013-.213t.937.313t.688.7t.262 1V8q.425 0 .713.288T21 9t-.288.713T20 10h-2q-.425 0-.712-.288T17 9t.288-.712T18 8V5.075L13.6 7.25q.675 1.075 1.038 2.275T15 12t-.363 2.5t-1.062 2.3l4.4 2.175V16q-.425 0-.7-.288T17 15t.288-.712T18 14h2q.425 0 .713.288T21 15t-.288.713T20 16v2.975q0 .575-.262 1t-.688.7t-.937.3t-1.013-.225m-5.35-4.875q.6-.85.925-1.838T13 12t-.325-2.013t-.9-1.837L4 12z");
}
</style><path class="xrw70qmon"/>`,
		"fallback": "material-symbols:body-fat-outline-rounded",
	});
}

export default Component;
