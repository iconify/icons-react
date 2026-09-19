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
		"content": `<style>.n9kx0hv7r {
  d: path("m12.898 25.49l3.092-9.416l3.092 9.416m-1.025-3.119h-4.135");
}

.weyvewb5j {
  d: path("M8.805 5.5h14.368a2.45 2.45 0 0 1 2.448 2.448v25.67a2.45 2.45 0 0 1-2.447 2.446H8.806a2.45 2.45 0 0 1-2.448-2.447V7.947A2.45 2.45 0 0 1 8.805 5.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yqgdknx8q {
  d: path("M25.622 11.921h13.572a2.44 2.44 0 0 1 2.448 2.448v25.684a2.44 2.44 0 0 1-2.448 2.447H24.855a2.44 2.44 0 0 1-2.447-2.447v-3.988");
}

.ze58a9bur {
  d: path("M28.933 22.503V28.8c0 1.722 1.384 3.119 3.092 3.119s3.092-1.397 3.092-3.12v-6.296");
}
</style><g class="y9tr6bcfx"><path class="yqgdknx8q"/><path class="ze58a9bur"/></g><g class="y9tr6bcfx"><path class="weyvewb5j"/><path class="n9kx0hv7r"/></g>`,
		"fallback": "arcticons:aucards",
	});
}

export default Component;
