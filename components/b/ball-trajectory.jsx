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
		"content": `<style>.hny3r-bal {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.934 3.934Q10.25 5.618 10.25 8t1.684 4.066T16 13.75t4.066-1.684T21.75 8t-1.684-4.066T16 2.25t-4.066 1.684m-3.671 6.854q-4.919 1.64-6.5 10.074q-.028.146.003.292t.115.27t.209.204q.125.082.272.109q.072.014.146.013t.146-.016t.141-.044t.129-.071t.112-.095t.092-.114t.068-.131q.028-.068.041-.141q1.419-7.566 5.5-8.926q.07-.024.134-.06q.065-.037.12-.085q.056-.049.101-.107q.046-.059.079-.125t.052-.137t.025-.145t-.004-.147t-.032-.143q-.024-.07-.06-.134q-.037-.065-.085-.12q-.049-.056-.107-.101q-.059-.046-.125-.079t-.137-.052t-.145-.025t-.147.004t-.143.032");
}
</style><path class="hny3r-bal"/>`,
		"fallback": "uix-solid:ball-trajectory",
	});
}

export default Component;
