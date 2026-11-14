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
		"content": `<style>.fch9eqbpi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.75 5q0-3.25 3.25-3.25T15.25 5q0 2.85-2.5 3.201v2.549H16q2.75 0 2.75 2.75v1.829q.874.196 1.549.872q.952.953.951 2.298q.001 1.347-.951 2.3T18 21.752t-2.299-.953t-.951-2.298v-.002q-.001-1.346.951-2.298q.675-.676 1.549-.872V13.5q0-1.25-1.25-1.25H8q-1.25 0-1.25 1.25v1.799q2.5.351 2.5 3.201q0 3.25-3.25 3.25T2.75 18.5q0-2.85 2.5-3.201V13.5q0-2.75 2.75-2.75h3.25V8.201Q8.75 7.85 8.75 5");
}
</style><path class="fch9eqbpi"/>`,
		"fallback": "uix-solid:ancestry-map",
	});
}

export default Component;
