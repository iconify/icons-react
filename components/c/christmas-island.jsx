import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9s0uaccs.css';
import '../../css/m/mvmxjh5gz.css';
import '../../css/p/pmrwhdclp.css';
import '../../css/e/ecu-ugb6g.css';
import '../../css/g/g56zy0bjq.css';
import '../../css/f/fgqwrob_t.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9s0uaccs"/><path class="mvmxjh5gz"/><path class="pmrwhdclp"/><path class="ecu-ugb6g"/><path class="g56zy0bjq"/><path class="fgqwrob_t"/>`,
		"fallback": "tabler-flags:christmas-island",
	});
}

export default Component;
