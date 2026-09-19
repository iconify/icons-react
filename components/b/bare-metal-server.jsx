import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k43y_he5a.css';
import '../../css/u/uqvmiit-o.css';
import '../../css/y/y8mkib1ak.css';
import '../../css/r/rs7rz-b0d.css';
import '../../css/j/jzccu8bfu.css';
import '../../css/j/j1pak7bbv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="k43y_he5a"/><path class="uqvmiit-o"/><circle class="y8mkib1ak"/><path class="rs7rz-b0d"/><circle class="jzccu8bfu"/><path class="j1pak7bbv"/>`,
		"fallback": "carbon:bare-metal-server",
	});
}

export default Component;
