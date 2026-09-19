import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzccu8bfu.css';
import '../../css/o/om3uz4b8p.css';
import '../../css/c/csyesnsto.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jzccu8bfu"/><path class="om3uz4b8p"/><path class="csyesnsto"/>`,
		"fallback": "carbon:ibm-cloud-virtual-server-classic",
	});
}

export default Component;
