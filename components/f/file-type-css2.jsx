import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.esw70tibv {
  fill: var(--svg-color--fff, #fff);
  d: path("m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007z");
}

.g6palwbnu {
  fill: var(--svg-color--fff, #fff);
  d: path("M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16z");
}

.m0qplte1l {
  fill: var(--svg-color--ebebeb, #ebebeb);
  d: path("M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829z");
}

.ug7kkwo_o {
  fill: var(--svg-color--1572b6, #1572b6);
  d: path("M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30z");
}

.v1bv8bb8w {
  fill: var(--svg-color--ebebeb, #ebebeb);
  d: path("m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004z");
}

.yz6nqnb5v {
  fill: var(--svg-color--33a9dc, #33a9dc);
  d: path("m16 27.858l8.17-2.265l1.922-21.532H16z");
}
</style><path class="ug7kkwo_o"/><path class="yz6nqnb5v"/><path class="g6palwbnu"/><path class="v1bv8bb8w"/><path class="esw70tibv"/><path class="m0qplte1l"/>`,
		"fallback": "vscode-icons:file-type-css2",
	});
}

export default Component;
