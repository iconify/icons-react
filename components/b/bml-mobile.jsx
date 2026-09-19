import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hg-y7hbzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.64 33.97l-1.512-2.756h21.744v2.757m-.366 2.326c-.357.25-.85.405-1.393.405s-1.036-.154-1.393-.405m-2.785 0c-.357.25-.85.405-1.393.405s-1.036-.154-1.393-.405m5.571 0c-.356-.25-.849-.404-1.393-.404s-1.036.154-1.392.404m-2.786 0c-.356-.25-.849-.404-1.393-.404s-1.036.154-1.392.404m0 0c-.357.25-.85.405-1.393.405s-1.036-.154-1.393-.405m0 0c-.356-.25-.849-.404-1.393-.404s-1.036.154-1.392.404m0 0c-.357.25-.85.405-1.393.405s-1.036-.154-1.393-.405m19.499 1.906c-.357.25-.85.405-1.393.405s-1.036-.155-1.393-.405m-2.785 0c-.357.25-.85.405-1.393.405s-1.036-.155-1.393-.405m5.571 0c-.356-.25-.849-.405-1.393-.405s-1.036.155-1.392.405m-2.786 0c-.356-.25-.849-.405-1.393-.405s-1.036.155-1.392.405m0 0c-.357.25-.85.405-1.393.405s-1.036-.155-1.393-.405m0 0c-.356-.25-.849-.405-1.393-.405s-1.036.155-1.392.405m0 0c-.357.25-.85.405-1.393.405s-1.036-.155-1.393-.405m.669-8.869l11.14-19.942v19.942");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="j3s9ivbxi"/><path class="hg-y7hbzq"/>`,
		"fallback": "arcticons:bml-mobile",
	});
}

export default Component;
