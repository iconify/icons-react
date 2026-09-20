import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ge6ieb12h {
  fill: var(--svg-color--eee, #eee);
  d: path("M9 14h27v8H9z");
}

.jixhx7bvb {
  fill: var(--svg-color--141414, #141414);
  d: path("M9 31h23a4 4 0 0 0 4-4v-5H9z");
}

.xjtbevbpj {
  fill: var(--svg-color--068241, #068241);
  d: path("M32 5H9v9h27V9a4 4 0 0 0-4-4");
}

.ys3n3ybcv {
  fill: var(--svg-color--ec2028, #ec2028);
  d: path("M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h5V5z");
}
</style><path class="xjtbevbpj"/><path class="ge6ieb12h"/><path class="jixhx7bvb"/><path class="ys3n3ybcv"/>`,
		"fallback": "twemoji:flag-for-flag-united-arab-emirates",
	});
}

export default Component;
