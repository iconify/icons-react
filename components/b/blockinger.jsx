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
		"content": `<style>.g4fn9abiu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 6.905a4 4 0 0 0-4 4v.85h4.804v-4.85zm.804 0h4.898v4.85H9.304zm4.9 0H19.1v4.85h-4.896zm4.896 0h4.898v4.85H19.1zm4.9 0h4.898v4.85H24z");
}

.jpjezvbmi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.305 31.347h4.898v4.898H9.305zm24.491 0h4.898v4.898h-4.898zm4.9 0H43.5v4.898h-4.804zM4.502 36.245v.85a4 4 0 0 0 4 4h.803v-4.85z");
}

.k8a7sphsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.898 6.905h4.896v4.85h-4.896zm4.897 0h4.898v4.85h-4.898zm4.9 0v4.85h4.803v-.85a4 4 0 0 0-4-4zM4.5 11.755h4.804v4.898H4.5zm4.804 0h4.898v4.898H9.304zm4.9 0H19.1v4.898h-4.896zm14.695 0h4.896v4.898h-4.896zm4.896 0h4.898v4.898h-4.898zm4.9 0h4.804v4.898h-4.804zM4.501 16.654h4.804v4.898H4.501z");
}

.kgqx2ns5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.305 36.245h4.898v4.85H9.305zm4.9 0h4.896v4.85h-4.896zm4.897 0H24v4.85h-4.898zm4.9 0H28.9v4.85h-4.898zm4.898 0h4.896v4.85H28.9zm4.896 0h4.898v4.85h-4.898zm4.901 0v4.85h.803a4 4 0 0 0 4-4v-.85z");
}

.unytcxv6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.304 16.654h4.898v4.898H9.304zm4.9 0H19.1v4.898h-4.896zm14.695 0h4.896v4.898h-4.896zm4.897 0h4.898v4.898h-4.898zm4.9 0H43.5v4.898h-4.804zM4.501 21.552h4.804v4.896H4.501zm4.804 0h4.898v4.896H9.305zm4.9 0h4.896v4.896h-4.896zm4.896 0h4.898v4.896h-4.898zm4.9 0h4.898v4.896h-4.898zm4.899 0h4.896v4.896H28.9zm4.896 0h4.898v4.896h-4.898zm4.9 0H43.5v4.896h-4.804zM4.502 26.448h4.804v4.898H4.502zm14.599 0h4.898v4.898h-4.898zm4.9 0h4.898v4.898h-4.898zm14.695 0H43.5v4.898h-4.804zM4.502 31.347h4.804v4.898H4.502z");
}
</style><path class="g4fn9abiu"/><path class="k8a7sphsq"/><path class="unytcxv6a"/><path class="jpjezvbmi"/><path class="kgqx2ns5z"/>`,
		"fallback": "arcticons:blockinger",
	});
}

export default Component;
