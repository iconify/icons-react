import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq44ds2pu.css';
import '../../css/b/b7nxp5bpe.css';
import '../../css/y/yho0_lb6o.css';
import '../../css/d/djwclpb4f.css';
import '../../css/g/gd662sbks.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="nq44ds2pu"/><path class="b7nxp5bpe"/><circle class="yho0_lb6o"/><path class="djwclpb4f"/><path class="gd662sbks"/>`,
		"fallback": "carbon:datastore",
	});
}

export default Component;
