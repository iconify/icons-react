import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzccu8bfu.css';
import '../../css/v/vjxwbqfru.css';
import '../../css/y/y8mkib1ak.css';
import '../../css/u/un5zkmt9p.css';
import '../../css/m/mhauvu0ld.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jzccu8bfu"/><path class="vjxwbqfru"/><circle class="y8mkib1ak"/><path class="un5zkmt9p"/><path class="mhauvu0ld"/>`,
		"fallback": "carbon:ibm-cloud-bare-metal-servers-vpc",
	});
}

export default Component;
