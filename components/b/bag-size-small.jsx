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
		"content": `<style>.ifq68il-d {
  d: path("M20.75 15.75H17.5a1.5 1.5 0 0 0 0 3h1.75a1.5 1.5 0 0 1 0 3H16");
}

.qfo9hnb5a {
  d: path("M13.204 21H7.75q-.098 0-.196-.01q-.098-.009-.194-.028q-.097-.02-.191-.048q-.094-.029-.184-.066q-.091-.038-.178-.084q-.086-.046-.168-.101t-.158-.117t-.145-.132q-.07-.069-.132-.145t-.117-.158t-.101-.168t-.084-.178q-.037-.09-.066-.184q-.028-.094-.048-.191q-.019-.096-.028-.194T5.75 19L5 8h14l-.34 4.988M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qfo9hnb5a"/><path class="ifq68il-d"/></g>`,
		"fallback": "uix-sharp:bag-size-small",
	});
}

export default Component;
