import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_lnf_n_d.css';
import '../../css/j/j5i82200f.css';
import '../../css/g/gllsilbfv.css';
import '../../css/v/vtrtxwlmf.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-solid clr-i-solid-path-1 i_lnf_n_d"/><path class="clr-i-solid clr-i-solid-path-2 j5i82200f"/><path class="clr-i-solid clr-i-solid-path-3 gllsilbfv"/><path class="clr-i-solid clr-i-solid-path-4 vtrtxwlmf"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:assign-user-solid",
	});
}

export default Component;
