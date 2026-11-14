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
		"content": `<style>.b5a4skk6i {
  d: path("M2.5 11.25q0 .055.008.11q.008.056.023.111q.016.055.039.109q.024.055.055.109t.07.108t.085.106q.046.053.1.105t.115.103t.129.101t.144.099t.157.096t.17.093t.184.09t.196.087q.102.043.209.084t.22.08t.231.076t.241.072t.252.068t.261.064t.269.059t.278.054t.285.05t.292.045t.297.039t.303.035t.308.03t.311.024t.314.019t.317.013q.159.006.318.008q.159.003.319.003q.572 0 1.135-.035q.563-.034 1.1-.102t1.031-.168t.932-.227m2.052 8.782V15.5a2 2 0 0 1 2-2h1M13.5 17h2.75m2.75-.25l3 4.75m0-4.75l-3 4.75");
}

.eqe5qv8kb {
  d: path("M2.5 5v12.75q0 .055.008.11q.008.056.023.111q.016.055.039.109q.024.055.055.109t.07.108t.085.106t.1.105t.115.103t.129.101t.144.099q.075.048.157.096q.082.047.17.093t.184.09q.095.045.196.087q.102.043.209.084t.22.08t.231.076t.241.072t.252.068t.261.064t.269.059t.278.054t.285.05t.292.045t.297.039t.303.035t.308.03t.311.024t.314.019t.317.013t.318.008T9 20q.757 0 1.494-.06q.737-.061 1.415-.178m3.591-8.713V5");
}

.loq701i7w {
  d: path("M2.5 5a6.5 2.25 0 1 0 13 0a6.5 2.25 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="loq701i7w"/><path class="eqe5qv8kb"/><path class="b5a4skk6i"/></g>`,
		"fallback": "uix-sharp:database-function",
	});
}

export default Component;
