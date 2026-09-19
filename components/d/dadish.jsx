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
		"content": `<style>.l4u2n1suk {
  cx: 24.491px;
  cy: 20.803px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.435px;
  ry: 2.606px;
}

.qb93odb-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.607 22.336s1.943.344 3.065.326c1.123-.017 2.538-.508 2.538-.508s.362 3.553-2.606 3.62c-2.967.069-2.997-3.445-2.997-3.445z");
}

.tdo2svn4s {
  cx: 35.783px;
  cy: 20.766px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.16px;
  ry: 2.596px;
}

.v7ihpmbtf {
  cx: 24.093px;
  cy: 24.191px;
  r: 15.226px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vjqs4uf9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.63 9.013c-1.592-4.226-4.002-6.94-7.048-5.72c-2.674 1.064-1.327 4.354-1.327 4.354S9.482 5.85 8.74 10.536c-.448 2.82 1.699 3.797 3.465 4.119m2.811 21.834C21.38 42.658 20.15 45 20.15 45s11.127-5.846 14.055-9.37");
}
</style><circle class="v7ihpmbtf"/><path class="vjqs4uf9s"/><ellipse transform="rotate(-5.026 24.49 20.803)" class="l4u2n1suk"/><ellipse transform="rotate(-9.615 35.783 20.766)" class="tdo2svn4s"/><path class="qb93odb-k"/>`,
		"fallback": "arcticons:dadish",
	});
}

export default Component;
