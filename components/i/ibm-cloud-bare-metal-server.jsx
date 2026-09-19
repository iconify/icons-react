import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzccu8bfu.css';
import '../../css/x/xjd8kbcec.css';
import '../../css/y/y8mkib1ak.css';
import '../../css/u/up8t03b6g.css';
import '../../css/k/k43y_he5a.css';
import '../../css/o/osv0uvb5i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jzccu8bfu"/><path class="xjd8kbcec"/><circle class="y8mkib1ak"/><path class="up8t03b6g"/><circle class="k43y_he5a"/><path class="osv0uvb5i"/>`,
		"fallback": "carbon:ibm-cloud-bare-metal-server",
	});
}

export default Component;
