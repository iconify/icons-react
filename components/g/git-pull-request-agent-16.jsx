import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7qv-mz-f.css';
import '../../css/e/e76qu_bjd.css';
import '../../css/i/ift_7p48t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7qv-mz-f"/><path class="e76qu_bjd"/><path class="ift_7p48t"/>`,
		"fallback": "octicon:git-pull-request-agent-16",
	});
}

export default Component;
