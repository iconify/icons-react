import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qek2tkbit.css';
import '../../css/m/m0n_d7bih.css';
import '../../css/t/tt--df6_y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWQkecbTQ"><g class="s9cl3zbei"><rect class="qek2tkbit"/><path class="m0n_d7bih"/><path class="tt--df6_y"/></g></mask></defs><path mask="url(#SVGWQkecbTQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:f-eight-key",
	});
}

export default Component;
