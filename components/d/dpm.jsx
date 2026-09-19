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
		"content": `<style>.ejwfn5hpe {
  width: 10.483px;
  height: 10.483px;
  x: 18.759px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.g-x8zzbzw {
  width: 10.483px;
  height: 10.483px;
  x: 5.5px;
  y: 18.759px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.innmorbgd {
  width: 10.483px;
  height: 10.483px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.k02r76bmp {
  width: 10.483px;
  height: 10.483px;
  x: 32.041px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.k5uf-kp9i {
  width: 10.483px;
  height: 10.483px;
  x: 18.759px;
  y: 18.759px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.lov9iuboj {
  width: 10.483px;
  height: 10.483px;
  x: 32.041px;
  y: 32.017px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.sw9u2ebxd {
  width: 10.483px;
  height: 10.483px;
  x: 18.759px;
  y: 32.017px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.ujgsl9rst {
  width: 10.483px;
  height: 10.483px;
  x: 5.5px;
  y: 32.017px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.yh5db2b8l {
  width: 10.483px;
  height: 10.483px;
  x: 32.041px;
  y: 18.759px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}
</style><rect class="innmorbgd"/><rect class="ejwfn5hpe"/><rect class="k02r76bmp"/><rect class="g-x8zzbzw"/><rect class="k5uf-kp9i"/><rect class="yh5db2b8l"/><rect class="ujgsl9rst"/><rect class="sw9u2ebxd"/><rect class="lov9iuboj"/>`,
		"fallback": "arcticons:dpm",
	});
}

export default Component;
