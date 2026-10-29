import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r69_adbss.css';
import '../../css/e/eg7twmghe.css';
import '../../css/l/llszwq3cc.css';
import '../../css/e/e28qe2bte.css';
import '../../css/o/o0g-8w6fp.css';
import '../../css/g/g_jxv5bwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r69_adbss wm-k"/><path class="eg7twmghe wm-k"/><path class="llszwq3cc wm-a"/><path class="e28qe2bte wm-a"/><path class="o0g-8w6fp wm-a"/><path class="g_jxv5bwf wm-k"/>`,
		"fallback": "withicons-bauhaus:camera",
	});
}

export default Component;
