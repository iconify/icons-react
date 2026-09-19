import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu410db3i.css';
import '../../css/v/voo8clboo.css';
import '../../css/l/lmf0ecbhq.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu410db3i"/><path class="voo8clboo"/><circle class="lmf0ecbhq"/>`,
		"fallback": "clarity:control-lun-solid-badged",
	});
}

export default Component;
