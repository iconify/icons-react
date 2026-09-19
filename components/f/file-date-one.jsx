import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/k/km8h23fgj.css';
import '../../css/x/x_b3i0b1s.css';
import '../../css/q/qq3uxvb1o.css';
import '../../css/b/bg4k9rbrb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7TQpMdjP"><g class="s9cl3zbei"><path class="km8h23fgj"/><circle class="x_b3i0b1s"/><path class="qq3uxvb1o"/><path class="bg4k9rbrb"/></g></mask></defs><path mask="url(#SVG7TQpMdjP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-date-one",
	});
}

export default Component;
