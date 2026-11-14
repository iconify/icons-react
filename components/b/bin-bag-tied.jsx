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
		"content": `<style>.vlkc0hxti {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.996 7.786Q20.25 10.227 20.25 17v2q0 3.25-3.25 3.25H7q-1.346 0-2.298-.952T3.75 19v-2q0-6.773 5.254-9.214q-.688-.378-1.254-.883q-1.93-1.724-.901-3.525l.027-.044q.604-.906 1.638-.865q.862.035 1.724.774q1.06.909 1.762 2.446q.702-1.537 1.762-2.446q.862-.739 1.724-.774q1.034-.041 1.638.865l.027.044q1.029 1.801-.901 3.525q-.566.505-1.254.883m-4.09-.815q-.626-1.717-1.644-2.589q-.467-.4-.808-.414q-.183-.007-.316.178q-.397.737.612 1.638q.872.779 2.156 1.187m2.188 0q1.284-.408 2.156-1.187q1.009-.901.612-1.638q-.133-.185-.316-.178q-.341.014-.808.414q-1.018.872-1.644 2.589");
}
</style><path class="vlkc0hxti"/>`,
		"fallback": "uix-solid:bin-bag-tied",
	});
}

export default Component;
