import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/ju2eegblx.css';
import '../../css/h/h2-widb_l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ju2eegblx"/><path class="h2-widb_l"/></g>`,
		"fallback": "streamline:ai-chip-spark",
	});
}

export default Component;
