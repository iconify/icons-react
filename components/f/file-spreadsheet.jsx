import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx94fvtdi.css';
import '../../css/j/j-rz0kfnd.css';
import '../../css/b/bq07eo2pj.css';
import '../../css/b/bjpkh6bgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx94fvtdi wm-k"/><path class="j-rz0kfnd wm-a"/><path class="bq07eo2pj wm-a"/><path class="bjpkh6bgj wm-k"/>`,
		"fallback": "withicons-bauhaus:file-spreadsheet",
	});
}

export default Component;
