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
		"content": `<style>.e3fh1ccza {
  d: path("M8.5 4H20a2 2 0 0 1 2 2v5M6 14h5.5m3.5 3.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.sierazzrb {
  d: path("M5.5 7H17q.098 0 .196.01q.098.009.194.028q.097.02.191.048q.094.029.184.066q.091.038.178.084q.086.046.168.101t.158.117t.145.132q.07.069.132.145t.117.158t.101.168t.084.178q.037.09.066.184q.028.094.048.191q.019.096.028.194T19 9v3.272");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xh29mhbep {
  d: path("M12.2 20.5H2.5V10H16v2.7");
}
</style><g class="ulnmmdpxh"><path class="xh29mhbep"/><path class="sierazzrb"/><path class="e3fh1ccza"/></g>`,
		"fallback": "uix-sharp:backlog-locked",
	});
}

export default Component;
