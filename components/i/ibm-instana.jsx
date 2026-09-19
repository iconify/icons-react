import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3diwob9a.css';
import '../../css/x/xjwfqkbgp.css';
import '../../css/x/xtul77bpd.css';
import '../../css/b/byvfoh51a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3diwob9a"/><circle class="xjwfqkbgp"/><circle class="xtul77bpd"/><path class="byvfoh51a"/>`,
		"fallback": "carbon:ibm-instana",
	});
}

export default Component;
